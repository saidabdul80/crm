<template>
   <div  >
      <label @click.prevent="open=true" class="flex bg-red-200 h-full cursor-pointer rounded-full items-center justify-center text-red-600" >{{selectedCurrency?.symbol}}</label>
      <Transition name="fade">
        <div v-if="open" class="'border-gray-300 z-[8]  bg-white top-[80px] right-[-40px]  absolute font-base w-[180px] shadow  rounded-md text-black" >
          <div class="hover:bg-gray-300 p-2 flex justify-between" @click.prevent="handleChange(account)" v-for="account in globalStore.accounts" :value="account">
            {{ account.title }}
            <span class="w-8 text-center">
              {{ account.symbol }}
            </span>
          </div>
        </div>
      </Transition>
      </div>
</template>


<script setup>
import { watch, computed, ref, onBeforeUnmount } from 'vue'
import { useGlobalStore } from '@/scripts/admin/stores/global'
import { useDashboardStore } from '@/scripts/admin/stores/dashboard'
import { useCompanyStore } from '@/scripts/admin/stores/company'

const dashboardStore = useDashboardStore()
const companyStore = useCompanyStore()
const emit = defineEmits(['change'])
const selectedCurrency = ref({})
const open = ref(false)
const globalStore = useGlobalStore()
function handleChange(account){
  selectedCurrency.value = account
  dashboardStore.currency_id = account.id
  emit('change', account)
  open.value=false
}
async function init(){
  globalStore.fetchAccounts()
  const res = await companyStore.fetchCompanySettings(['currency'])
  if(res?.data){
    selectedCurrency.value = globalStore.accounts.find((item)=> item.id == res?.data.currency)
    dashboardStore.currency_id = parseInt(res?.data.currency)
    emit('change', globalStore.accounts[0])
  }
}
init()
</script>
