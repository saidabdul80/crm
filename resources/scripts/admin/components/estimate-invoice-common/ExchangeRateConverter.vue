<template>
    <BaseInputGroup
    label="Currency Request"
    >
    <div class="flex ">
      <label class="place-items-center bg-gray-500 rounded-s-md h-[32px] mt-[2px] p-2 w-[20%] text-sm text-white">
        {{selectedCurrency?.code}} To</label>
      <select v-model="store[storeProp].paying_currency" @change="updatePayingCurrency" class="font-base w-[80%] sm:text-sm border-gray-200 rounded-md text-black focus:border-gray-400" >
        <option>Select Currency</option>
        <option v-for="account in globalStore.accounts" :value="account">{{ account.name }}</option>
      </select>
    </div>

   <!--  <BaseInput
      v-model="store[storeProp].exchange_rate"
      :content-loading="isFetching && !isEdit"
      addon="To"
      :disabled="isFetching"
      @input="v.exchange_rate.$touch()"
    >
      <template #right>
        <span class="text-gray-500 sm:text-sm">
          {{ companyCurrency.code }}
        </span>
      </template>
    </BaseInput>
    <span class="text-gray-400 text-xs mt-2 font-light">
      {{
        $t('settings.exchange_rate.exchange_help_text', {
          currency: selectedCurrency.code,
          baseCurrency: companyCurrency.code,
        })
      }}
    </span> -->
  </BaseInputGroup>
  <BaseInputGroup
    v-if="store.showExchangeRate && selectedCurrency"
    :content-loading="isFetching && !isEdit"
    :label="$t('settings.exchange_rate.exchange_rate')"
    :error="v.exchange_rate.$error && v.exchange_rate.$errors[0].$message"
    required
  >
    <template #labelRight>
      <div v-if="hasActiveProvider && isEdit">
        <BaseIcon
          v-tooltip="{ content: 'Fetch Latest Exchange rate' }"
          name="RefreshIcon"
          :class="`h-4 w-4 text-primary-500 cursor-pointer outline-none ${
            isFetching
              ? ' animate-spin rotate-180 cursor-not-allowed pointer-events-none '
              : ''
          }`"
          @click="getCurrenctExchangeRate(customerCurrency)"
        />
      </div>
    </template>
    <BaseInput
      v-model="store[storeProp].exchange_rate"
      :content-loading="isFetching && !isEdit"
      :addon="`1 ${selectedCurrency?.code} =`"
      :disabled="isFetching"
      @input="v.exchange_rate.$touch()"
    >
      <template #right>
        <span class="text-gray-500 sm:text-sm">
          {{ store[storeProp].paying_currency?.code }}
        </span>
      </template>
    </BaseInput>

<!--     <BaseInput

      :content-loading="isFetching && !isEdit"
      addon="From"
      :disabled="isFetching"
      @input="v.exchange_rate.$touch()"
    >
      <template #right>
        <span class="text-gray-500 sm:text-sm">
          {{ companyCurrency.code }}
        </span>
      </template>
    </BaseInput> -->

  </BaseInputGroup>

</template>

<script setup>
import { watch, computed, ref, onBeforeUnmount } from 'vue'
import { useGlobalStore } from '@/scripts/admin/stores/global'
import { useCompanyStore } from '@/scripts/admin/stores/company'
import { useExchangeRateStore } from '@/scripts/admin/stores/exchange-rate'

const props = defineProps({
  v: {
    type: Object,
    default: null,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  store: {
    type: Object,
    default: null,
  },
  storeProp: {
    type: String,
    default: '',
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
  customerCurrency: {
    type: [String, Number],
    default: null,
  },
})
const globalStore = useGlobalStore()
const companyStore = useCompanyStore()
const exchangeRateStore = useExchangeRateStore()
const hasActiveProvider = ref(false)
let isFetching = ref(false)

globalStore.fetchAccounts()


const companyCurrency = computed(() => {
  return companyStore.selectedCompanyCurrency
})

const selectedCurrency = computed(() => {
  return globalStore.accounts.find(
    (c) => c.currency_id === props.store[props.storeProp].currency_id
  )
})

const isCurrencyDiffrent = computed(() => {
  return companyCurrency.value.id !== props.customerCurrency
})

watch(
  () => props.store[props.storeProp].customer,
  (v) => {
    setCustomerCurrency(v)
  },
  { deep: true }
)

watch(
  () => props.store[props.storeProp].currency_id,
  (v) => {
    onChangeCurrency(v)
  },
  { immediate: true }
)
watch(
  () => props.customerCurrency,
  (v) => {
    if (v && props.isEdit) {
      checkForActiveProvider(v)
    }
  },
  { immediate: true }
)

watch(
  () => globalStore.areAccountsLoading,
  (v) => {
    const currency_id = props.store[props.storeProp].paying_currency_id;
    if(currency_id){
      globalStore.accounts.forEach((item)=>{
          if(item.currency_id == currency_id ){
            props.store[props.storeProp].paying_currency = item;
          }
      })
    }

  },
  { immediate: true }
)


function updatePayingCurrency(){
  props.store[props.storeProp].paying_currency_id = props.store[props.storeProp].paying_currency?.id
}

function checkForActiveProvider() {
  if (isCurrencyDiffrent.value) {
    exchangeRateStore
      .checkForActiveProvider(props.customerCurrency)
      .then((res) => {
        if (res.data.success) {
          hasActiveProvider.value = true
        }
      })
  }
}

function setCustomerCurrency(v) {
  if (v) {
    props.store[props.storeProp].currency_id = v.currency.id
  } else {
    props.store[props.storeProp].currency_id = companyCurrency.value.id
  }
}

async function onChangeCurrency(v) {
  if (v !== companyCurrency.value.id) {
    if (!props.isEdit && v) {
      await getCurrenctExchangeRate(v)
    }

    props.store.showExchangeRate = true
  } else {
    props.store.showExchangeRate = false
  }
}

function getCurrenctExchangeRate(v) {
  isFetching.value = true
  exchangeRateStore
    .getCurrentExchangeRate(v)
    .then((res) => {
      if (res.data && !res.data.error) {
        props.store[props.storeProp].exchange_rate = res.data.exchangeRate[0]
      } else {
        props.store[props.storeProp].exchange_rate = ''
      }
      isFetching.value = false
    })
    .catch((err) => {
      isFetching.value = false
    })
}

onBeforeUnmount(() => {
  props.store.showExchangeRate = false
})
</script>
