<template>
  <BaseContentPlaceholders v-if="contentLoading">
    <BaseContentPlaceholdersBox
      :rounded="true"
      class="w-full"
      style="height: 200px"
    />
  </BaseContentPlaceholders>

  <div v-else class="relative">
    <div class="absolute bottom-0 right-0 z-10">
      <BaseDropdown
        :close-on-select="true"
        max-height="220"
        position="top-end"
        width-class="w-92"
        class="mb-2"
      >
        <template #activator>
          <BaseButton type="button" variant="primary-outline" class="mr-4">
            {{ $t('settings.customization.insert_fields') }}
            <template #left="slotProps">
              <BaseIcon name="PlusSmIcon" :class="slotProps.class" />
            </template>
          </BaseButton>
        </template>

        <div class="flex p-2">
          <ul v-for="(type, index) in fieldList" :key="index" class="list-none">
            <li class="mb-1 ml-2 text-xs font-semibold text-gray-500 uppercase">
              {{ type.label }}
            </li>

            <li
              v-for="(field, fieldIndex) in type.fields"
              :key="fieldIndex"
              class="
                w-48
                text-sm
                font-normal
                cursor-pointer
                rounded
                ml-1
                py-0.5
              "
              @click="value += `{${field.value}}`"
            >
              <div class="flex pl-1">
                <BaseIcon
                  name="ChevronDoubleRightIcon"
                  class="h-3 mt-1 mr-2 text-gray-400"
                />

                {{ field.label }}
              </div>
            </li>
          </ul>
        </div>
      </BaseDropdown>
    </div>
    <BaseEditor v-model="value" />
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useCustomFieldStore } from '@/scripts/admin/stores/custom-field'

const props = defineProps({
  contentLoading: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  fields: {
    type: Array,
    default: [],
  },
})

const emit = defineEmits(['update:modelValue'])

const customFieldsStore = useCustomFieldStore()

let fieldList = ref([])
let invoiceFields = ref([])
let estimateFields = ref([])
let paymentFields = ref([])
let customerFields = ref([])
const position = null

watch(
  () => props.fields,
  (val) => {
    if (props.fields && props.fields.length > 0) {
      getFields()
    }
  }
)

watch(
  () => customFieldsStore.customFields,
  (newValue) => {
    invoiceFields.value = newValue
      ? newValue.filter((field) => field.model_type === 'Invoice')
      : []
    customerFields.value = newValue
      ? newValue.filter((field) => field.model_type === 'Customer')
      : []
    paymentFields.value = newValue
      ? newValue.filter((field) => field.model_type === 'Payment')
      : []
    estimateFields.value = newValue.filter(
      (field) => field.model_type === 'Estimate'
    )
    getFields()
  }
)

onMounted(() => {
  fetchFields()
})

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})

async function fetchFields() {
  await customFieldsStore.fetchCustomFields()
}
async function getFields() {
  try {
    fieldList.value = [];

    const generateFieldDefinition = (labelPrefix, valuePrefix, fields) => {
      return {
        label: labelPrefix + ' Address',
        fields: fields.map(field => ({ label: field.label, value: valuePrefix + field.value }))
      };
    };

    const fieldDefinitions = {
      shipping: generateFieldDefinition('Shipping', 'SHIPPING_', [
        { label: 'Address name', value: 'ADDRESS_NAME' },
        { label: 'Country', value: 'COUNTRY' },
        { label: 'State', value: 'STATE' },
        { label: 'City', value: 'CITY' },
        { label: 'Address Street 1', value: 'ADDRESS_STREET_1' },
        { label: 'Address Street 2', value: 'ADDRESS_STREET_2' },
        { label: 'Phone', value: 'PHONE' },
        { label: 'Zip Code', value: 'ZIP_CODE' }
      ]),
      billing: generateFieldDefinition('Billing', 'BILLING_', [
        { label: 'Address name', value: 'ADDRESS_NAME' },
        { label: 'Country', value: 'COUNTRY' },
        { label: 'State', value: 'STATE' },
        { label: 'City', value: 'CITY' },
        { label: 'Address Street 1', value: 'ADDRESS_STREET_1' },
        { label: 'Address Street 2', value: 'ADDRESS_STREET_2' },
        { label: 'Phone', value: 'PHONE' },
        { label: 'Zip Code', value: 'ZIP_CODE' }
      ]),
      customer: {
        label: 'Customer',
        fields: [
          { label: 'Display Name', value: 'CONTACT_DISPLAY_NAME' },
          { label: 'Contact Name', value: 'PRIMARY_CONTACT_NAME' },
          { label: 'Email', value: 'CONTACT_EMAIL' },
          { label: 'Phone', value: 'CONTACT_PHONE' },
          { label: 'Website', value: 'CONTACT_WEBSITE' }
        ]
      },
      invoice: {
        label: 'Invoice',
        fields: [
          { label: 'Date', value: 'INVOICE_DATE' },
          { label: 'Due Date', value: 'INVOICE_DUE_DATE' },
          { label: 'Number', value: 'INVOICE_NUMBER' },
          { label: 'Ref Number', value: 'INVOICE_REF_NUMBER' }
        ]
      },
      estimate: {
        label: 'Estimate',
        fields: [
          { label: 'Date', value: 'ESTIMATE_DATE' },
          { label: 'Expiry Date', value: 'ESTIMATE_EXPIRY_DATE' },
          { label: 'Number', value: 'ESTIMATE_NUMBER' },
          { label: 'Ref Number', value: 'ESTIMATE_REF_NUMBER' }
        ]
      },
      payment: {
        label: 'Payment',
        fields: [
          { label: 'Date', value: 'PAYMENT_DATE' },
          { label: 'Number', value: 'PAYMENT_NUMBER' },
          { label: 'Mode', value: 'PAYMENT_MODE' },
          { label: 'Amount', value: 'PAYMENT_AMOUNT' }
        ]
      },
      company: generateFieldDefinition('Company', 'COMPANY_', [
        { label: 'Company Name', value: 'NAME' },
        { label: 'Country', value: 'COUNTRY' },
        { label: 'State', value: 'STATE' },
        { label: 'City', value: 'CITY' },
        { label: 'Address Street 1', value: 'ADDRESS_STREET_1' },
        { label: 'Address Street 2', value: 'ADDRESS_STREET_2' },
        { label: 'Phone', value: 'PHONE' },
        { label: 'Zip Code', value: 'ZIP_CODE' }
      ])
    };

    if (props.fields && props.fields.length > 0) {
      const availableFields = Object.keys(fieldDefinitions);

      for (const field of props.fields) {
        if (availableFields.includes(field)) {
          fieldList.value.push(fieldDefinitions[field]);
        }
      }
    }
  } catch (error) {
    console.error('Error fetching fields:', error);
    // Handle error here
  }
}

getFields()
</script>
