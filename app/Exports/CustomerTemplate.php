<?php

namespace Crater\Exports;

use Crater\Models\CustomField;
use Maatwebsite\Excel\Concerns\FromCollection;

class CustomerTemplate implements FromCollection
{
    public function collection()
    {
        // Define the column headers for the template
        $headers = ['name', 'email', 'phone'];

        // Add custom field headers if needed
        // Assuming you have a collection of custom field slugs in $customFields
        // You need to adjust this part based on your custom fields structure
        $customFields = CustomField::where('model_type','Customer')->pluck('slug');
        foreach ($customFields as $field) {
            $headers[] = $field;
        }

        // Create a collection containing the headers
        $collection = collect([$headers]);

        return $collection;
    }
}
