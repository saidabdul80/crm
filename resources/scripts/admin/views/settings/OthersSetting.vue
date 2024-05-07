<template>
  <form action="" class="relative" @submit.prevent="updatePreferencesData">

    <BaseSettingCard title="Others" description="Account settings">
      <BaseInputGrid class="mt-5">
        <BaseInputGroup :content-loading="isFetchingInitialData" label="Currency"
          help-text="company account by currency" :error="v$.account?.$error && v$.account?.$errors[0]?.$message"
          required>
          <select v-model="settingsForm.currency_id" :class="v$.currency_id.$error?'border-red-500':''"  class="font-base block w-full sm:text-sm border-gray-200 rounded-md text-black focus:border-gray-400" >
            <option>Select Currency</option>
            <option v-for="account in globalStore.accounts" :value="account.id">{{ account.name }}</option>

          </select>
          <span v-if="v$.amount?.$error" class="text-red-500">{{ v$.currency_id?.$errors[0]?.$message }}</span>
        </BaseInputGroup>
        <BaseInputGroup label="Amount" required>
          <BaseInput v-model="settingsForm.amount" :invalid="v$.amount.$error" />
          <span v-if="v$.amount?.$error" class="text-red-500">{{ v$.amount?.$errors[0]?.$message }}</span>
        </BaseInputGroup>
      </BaseInputGrid>
      <BaseButton :loading="isSaving" :disabled="isSaving" class="mt-6">
        <template #left="slotProps">
          <BaseIcon v-if="!isSaving" name="SaveIcon" :class="slotProps.class"></BaseIcon>
        </template>
        save
      </BaseButton>
    </BaseSettingCard>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useGlobalStore } from '@/scripts/admin/stores/global'
import { useCompanyStore } from '@/scripts/admin/stores/company'
import { useI18n } from 'vue-i18n'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

const companyStore = useCompanyStore()
const globalStore = useGlobalStore()
const { $t } = useI18n()

const settingsForm = reactive({currency_id:'', amount:0 })
const isSaving = ref(false)
const isFetchingInitialData = ref(false)

const rules = {
  currency_id: { required },
  amount: { required }
}

const v$ = useVuelidate(rules, settingsForm)

async function setInitialData() {
  isFetchingInitialData.value = true
  try {
    await globalStore.fetchAccounts()
  } catch (error) {
    console.error('Error fetching initial data:', error)
    // Handle error
  } finally {
    isFetchingInitialData.value = false
  }
}

/* function loadamount() {
  const selectedCurrency = settingsForm.currency_id
  const selectedCurrencyData = globalStore.accounts.filter(account => account.id === selectedCurrency)
  console.log(selectedCurrencyData,globalStore.accounts,selectedCurrency)
  settingsForm.amount = selectedCurrencyData[0]?.amount || null
} */

async function updatePreferencesData() {
  v$.value.$touch()
  if (v$.value.$error) {
    return
  }

  isSaving.value = true
  try {
    const data = {
      ...settingsForm
    }
    console.log(data,3333)
  //delete data.settings.link_expiry_days

    const res = await companyStore.updateCompanyAccount(data)
    setInitialData()
    // Handle response if needed
  } catch (error) {
    console.error('Error updating preferences:', error)
    // Handle error
  } finally {
    isSaving.value = false
  }
}

setInitialData()
</script>
