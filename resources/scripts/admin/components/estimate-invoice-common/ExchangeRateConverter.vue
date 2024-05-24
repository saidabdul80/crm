<template>
    <BaseInputGroup v-if="!isPayment"
    label="Currency Request"
    >

    <div class="flex " >
      <select v-model="store[storeProp].paying_currency" :class="!isValidCurrency?'border-red-500 focus:border-red-400 shake focus:ring-red-400 ':'border-gray-200'"  @change="updatePayingCurrency" class="font-base w-[80%] sm:text-sm  rounded-md text-black focus:border-gray-400" >
        <option>Select Currency</option>
        <option v-for="account in globalStore.accounts" :value="account">{{ account.name }}</option>
      </select>
      <label class="place-items-center bg-gray-500 h-[32px] mt-[2px] p-2 w-[20%] text-sm text-white">To</label>

      <select v-model="store[storeProp].currency" :class="!isValidCurrency?'border-red-500 focus:border-red-400 shake focus:ring-red-400 ':'border-gray-200'"  @change="updateRequestCurrency" class="font-base w-[80%] sm:text-sm  rounded-md text-black focus:border-gray-400" >
        <option>Select Currency</option>
        <option v-for="account in globalStore.accounts" :value="account">{{ account.name }}</option>
      </select>
    </div>
  </BaseInputGroup>
  <!-- v-if="store.showExchangeRate && selectedCurrency" -->
  <BaseInputGroup
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

    <input type="text" class="font-base w-[80%] sm:text-sm border-gray-200 rounded-md text-black focus:border-gray-400"
      :value="store[storeProp].exchange_rate"
      :addon="`1 ${currencyStack.first} =`"
      disabled
      v-if="isPayment"
    />
    <BaseInput
    v-else
      v-model="store[storeProp].exchange_rate"
      :content-loading="isFetching && !isEdit"
      :addon="`1 ${currencyStack.first} =`"
      :disabled="isFetching"
      @input="v.exchange_rate.$touch()"
    >
      <template #right>
        <span class="flex items-center">
          <span class="text-gray-500 sm:text-sm mr-2">
            {{ currencyStack.second}}
          </span>
          <button class="bg-white p-1 rounded-md  active:animate-ping" @click="flipCurrency(true)" type="button">
            <svg fill="#444" height="18px" width="18px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 214.367 214.367" xml:space="preserve" stroke="#000000" stroke-width="0.00214367"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.42873399999999995"></g><g id="SVGRepo_iconCarrier"> <path d="M202.403,95.22c0,46.312-33.237,85.002-77.109,93.484v25.663l-69.76-40l69.76-40v23.494 c27.176-7.87,47.109-32.964,47.109-62.642c0-35.962-29.258-65.22-65.22-65.22s-65.22,29.258-65.22,65.22 c0,9.686,2.068,19.001,6.148,27.688l-27.154,12.754c-5.968-12.707-8.994-26.313-8.994-40.441C11.964,42.716,54.68,0,107.184,0 S202.403,42.716,202.403,95.22z"></path> </g></svg>
          </button>
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
import useVuelidate from '@vuelidate/core'
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
  isPayment: {
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
props.store[props.storeProp].fliped = false;

const isValidCurrency = ref(true)

globalStore.fetchAccounts()
const companyCurrency = computed(() => {
  return companyStore.selectedCompanyCurrency
})
const selectedCurrency2 = ref({})
const selectedCurrency = computed(() => {
  selectedCurrency2.value = globalStore.accounts.find(
    (c) => c.currency_id === props.store[props.storeProp].currency_id
  )
  return selectedCurrency2.value;
})

const currencyStack = ref({
  first:selectedCurrency2.value?.code,
  second: props.store[props.storeProp].paying_currency?.code
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

function flipCurrency(flip = false){
  if(flip){
    props.store[props.storeProp].fliped = !props.store[props.storeProp].fliped
  }
  if(props.store[props.storeProp].fliped){
    currencyStack.value.first = props.store[props.storeProp].paying_currency?.code
    currencyStack.value.second= selectedCurrency2.value?.code
  }else{
    currencyStack.value.first = selectedCurrency.value?.code
    currencyStack.value.second= props.store[props.storeProp].paying_currency?.code
  }
}

function updatePayingCurrency(){
  flipCurrency()

  if(props.store[props.storeProp].currency?.id === props.store[props.storeProp].paying_currency?.id){
    isValidCurrency.value = false
    props.store[props.storeProp].paying_currency = null
  }else{
    isValidCurrency.value=true
    props.store[props.storeProp].paying_currency_id = props.store[props.storeProp].paying_currency?.id
  }
}

function updateRequestCurrency(){
  flipCurrency()

  if(props.store[props.storeProp].currency?.id === props.store[props.storeProp].paying_currency?.id){
    isValidCurrency.value = false
    props.store[props.storeProp].currency = null
  }else{
    isValidCurrency.value=true
    props.store[props.storeProp].currency_id = props.store[props.storeProp].currency?.id
  }
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
    props.store[props.storeProp].currency_id = v.currency?.id
  } else {
    props.store[props.storeProp].currency_id = companyCurrency.value?.id
  }
}

async function onChangeCurrency(v) {
  flipCurrency()
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
       // props.store[props.storeProp].exchange_rate = ''
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
