<?php
$invoice->load('from_currency');
$invoice->load('currency');
?>
<style>
    .text-left {
        float: left;
    }

    .text-right {
        float: right;
    }

    .clear-f {
        clear: both;
    }
</style>
    <div>
        @foreach ($invoice->items as $item)
            <div>
                <div class="">
                    <div>{{ $item->name }}</div>
                    <span class="item-description">{!! nl2br(htmlspecialchars($item->description)) !!}</span>
                </div>
                @foreach ($customFields as $field)
                    <div class="clear-f">
                        <span class="text-left">{{ $field->label }}:</span>
                        <span class="text-right">{{ $item->getCustomFieldValueBySlug($field->slug) }}</span>
                    </div>
                @endforeach
                <div class="clear-f">
                    <span class="text-left">toCurrency:</span>
                    <span class="text-right">{{ $invoice->from_currency?->code }}</span>
                </div>
                <div class="clear-f">
                    <span class="text-left">fromCurrency:</span>
                    <span class="text-right">{{ $invoice->currency?->code }}</span>
                </div>
                <div class="clear-f">
                    <span class="text-left">@lang('pdf_quantity_label'):</span>
                    <span class="text-right">{{ $item->quantity }} @if ($item->unit_name)
                            {{ $item->unit_name }}
                        @endif
                    </span>
                </div>
                <div class="clear-f">
                    <span class="text-left">Rate:</span>
                    <span class="text-right">{!! format_money_pdf($item->exchange_rate, $invoice->customer->currency) !!}</span>
                </div>
                @if ($invoice->discount_per_item === 'YES')
                    <div>
                        <span class="text-right">@lang('pdf_discount_label')</span>
                        <span class="text-right">
                            @if ($item->discount_type === 'fixed')
                                {!! format_money_pdf($item->discount_val, $invoice->customer->currency) !!}
                            @endif
                            @if ($item->discount_type === 'percentage')
                                {{ $item->discount }}%
                            @endif
                        </span>
                    </div>
                @endif
                @if ($invoice->tax_per_item === 'YES')
                    <div>
                        <span class="text-right">@lang('pdf_tax_label'):</span>
                        <span class=" text-right">{!! format_money_pdf($item->tax, $invoice->customer->currency) !!}</span>
                    </div>
                @endif
                <div class="clear-f">
                    <span class="text-left">@lang('pdf_amount_label')</span>
                    <span class="text-right">{!! format_money_pdf($item->total, $invoice->customer->currency) !!}</span>
                </div>
            </div>
        @endforeach
    </div>

    <div class="clear-f"></div>
