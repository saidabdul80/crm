<template>
  <BaseModal :show="modalActive" @close="closeModalNow">
    <template #header>
      <div class="flex justify-between w-full">
        {{ modalStore.title }}

        <BaseButton variant="primary" type="button" @click="downloadTemplate()">
          <template #left="{ classname }">
            <BaseIcon name="SaveIcon" :class="classname" />
          </template>
           Download Template
        </BaseButton>

        <BaseIcon
          name="XIcon"
          class="h-6 w-6 text-gray-500 cursor-pointer"
          @click="closeModalNow"
        />
      </div>

    </template>
    <form @submit.prevent="submitNote">
      <div class="px-8 py-8 sm:p-6">
        <BaseInputGrid layout="one-column">

          <BaseInputGroup
            :label="$t('Upload File')"
          >
            <input type="file" @change="handleFileUpload" accept=".csv, .xls, .xlsx" required>
          </BaseInputGroup>
        </BaseInputGrid>
      </div>
      <div class="flex justify-end px-4 py-4 border-t border-solid border-gray-light">
        <BaseButton
          class="mr-2"
          variant="primary-outline"
          type="button"
          @click="closeModalNow"
        >
          {{ $t('general.cancel') }}
        </BaseButton>
        <BaseButton
          :loading="isSaving"
          :disabled="isSaving"
          variant="primary"
          type="submit"
        >
          <template #left="{ classname }">
            <BaseIcon name="SaveIcon" :class="classname" />
          </template>
        Upload
        </BaseButton>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useModalStore } from '@/scripts/stores/modal'
import { useCustomerStore } from '@/scripts/admin/stores/customer'
import { useNotificationStore } from '@/scripts/stores/notification'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'
const emit = defineEmits(['uploaded'])
const modalStore = useModalStore()
const customerStore = useCustomerStore()
const notificationStore = useNotificationStore()
const { t } = useI18n()
const isSaving = ref(false)
const fields = ref(['customer', 'customerCustom'])
const file = ref(null)

const modalActive = computed(() => modalStore.active && modalStore.componentName === 'ImportCustomerModal')

const rules = computed(() => ({
  currentFile: {
    name: {
      required: helpers.withMessage(t('validation.required'), required),
      minLength: helpers.withMessage(t('validation.name_min_length', { count: 3 }), minLength(3)),
    },
    notes: {
      required: helpers.withMessage(t('validation.required'), required),
    },
    type: {
      required: helpers.withMessage(t('validation.required'), required),
    },
  },
}))

const v$ = useVuelidate(rules)

function closeModalNow() {
  modalStore.closeModal()
  setTimeout(() => {
    v$.value.$reset()
  }, 300)
}

async function downloadTemplate(){

  await customerStore.downloadTemplate()
}

async function submitNote() {
  isSaving.value = true
  await customerStore.uploadCustomer(file.value)
  isSaving.value = false
  emit('uploaded',true)
  modalStore.active = false
  // Handle form submission logic here
}

function handleFileUpload(event) {
  const uploadedFile = event.target.files[0]
  file.value = uploadedFile

}
</script>

<style lang="scss">
.note-modal {
  .header-editior .editor-menu-bar {
    margin-left: 0.5px;
    margin-right: 0px;
  }
}
</style>
