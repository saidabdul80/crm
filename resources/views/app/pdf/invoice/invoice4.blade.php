<!DOCTYPE html>
<html>

<head>
    <title>@lang('pdf_invoice_label') - {{ $invoice->invoice_number }}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style type="text/css">
        @page{
            size: 300px 27cm portrait;
        }
        /* -- Base -- */

        body {
            font-family: "DejaVu Sans";
            max-width: 300px;
            padding: 20px;
        }

        html {
            margin: 50px 10px 0px 10px;
            padding: 0px;
        }


        hr {
            color: rgba(0, 0, 0, 0.2);
            border: 0.5px solid #EAF1FB;
        }

        /* -- Header -- */

        .header-container {
            margin-top: -30px;
        }

        .header-logo {

            text-transform: capitalize;
            color: #817AE3;
            padding-top: 0px;
        }



        .company-address {
            margin-top: 12px;

            line-height: 15px;
            color: #595959;
            word-wrap: break-word;
        }

        /* -- Content Wrapper  */

        .content-wrapper {
            display: block;
            padding-top: 0px;
            padding-bottom: 20px;
        }

        .customer-address-container {
            display: block;
            float: left;
            padding: 10px 0 0 0px;
        }

        /* -- Shipping -- */
        .shipping-address-container {
            float: right;
            display: block;
        }

        .shipping-address-container--left {
            float: left;
            display: block;
            padding-left: 0;
        }

        .shipping-address {

            line-height: 15px;
            color: #595959;
            margin-top: 5px;
            word-wrap: break-word;
        }

        /* -- Billing -- */

        .billing-address-container {
            display: block;
            float: left;
        }

        .billing-address {

            line-height: 15px;
            color: #595959;
            margin-top: 5px;
            word-wrap: break-word;
        }

        /*  -- Estimate Details -- */

        .invoice-details-container {
            display: block;
            padding-top: 10px;
        }

        .attribute-label {

            line-height: 15px;
            color: #55547A
        }

        .attribute-value {

            line-height: 15px;
        }

        .item-description {
            color: #595959;

            line-height: 12px;
        }

        /* -- Notes -- */
        .notes {

            color: #595959;
            margin-top: 15px;
            text-align: left;
            page-break-inside: avoid;
        }

        .notes-label {

            line-height: 22px;
            letter-spacing: 0.05em;
            color: #040405;
            white-space: nowrap;
            height: 19.87px;
            padding-bottom: 10px;
        }

        ul li{
            list-style: none;
        }

    </style>

    @if (App::isLocale('th'))
        @include('app.pdf.locale.th')
    @endif
</head>

<body>
    <div class="header-container" >

        <img class="header-logo" style="height: 50px;" src="{{ $logo }}" alt="Company Logo">
    </div>

    <hr class="header-bottom-divider">
    <p>Hi </p>
        <div class="main-content" >
            <div class="customer-address-container">
                <div class="billing-address-container billing-address">
                    @if ($billing_address)
                        <b>@lang('pdf_bill_to')</b> <br>
                        {!! $billing_address !!}
                    @endif
                </div>

                <div @if ($billing_address !== '</br>') class="shipping-address-container shipping-address" @else class="shipping-address-container--left shipping-address" @endif>
                    @if ($shipping_address)
                        <b>@lang('pdf_ship_to')</b> <br>
                        {!! $shipping_address !!}
                    @endif
                </div>
                <div style="clear: both;"></div>
            </div>

            <div style="margin-bottom: 30px">
                <div>
                    <span class="attribute-label" style="margin-left:-3px;">Invoice Number</span>
                    <span class="attribute-value">&nbsp;{{ $invoice->invoice_number }}</span>
                </div>
                <div>
                    <span class="attribute-label">@lang('pdf_invoice_date')</span>
                    <span class="attribute-value">&nbsp;{{ $invoice->formattedInvoiceDate }}</span>
                </div>
                <div>
                    <span class="attribute-label">@lang('pdf_invoice_due_date')</span>
                    <span class="attribute-value">&nbsp;{{ $invoice->formattedDueDate }}</span>
                </div>
            </div>


        <section style="width: 100%">
            @include('app.pdf.invoice.partials.list')
        </section>

        <div class="notes" >
            @if ($notes)
                {{-- <div class="notes-label">
                    @lang('pdf_notes')
                </div> --}}

                {!! $notes !!}
            @endif
        </div>
    </div>
</body>

</html>
