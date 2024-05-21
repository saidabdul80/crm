<?php

namespace Crater\Mail;

use Crater\Models\EmailLog;
use Crater\Models\Invoice;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Vinkla\Hashids\Facades\Hashids;

class SendInvoiceMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    public $data = [];

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $log = EmailLog::create([
            'from' => $this->data['from'],
            'to' => $this->data['to'],
            'subject' => 'New Invoice',
            'body' => 'default',
            'mailable_type' => Invoice::class,
            'mailable_id' => $this->data['invoice']['id'],
        ]);

        $log->token = Hashids::connection(EmailLog::class)->encode($log->id);
        $log->save();

        $this->data['url'] = route('invoice', ['email_log' => $log->token]);

        $mailContent = $this->from('said@paramountstudents.com', config('mail.from.name'))
            ->subject('New Invoice')
            ->markdown('app.pdf.invoice.'.$this->data['invoice_template'], $this->data);

    /*     if ($this->data['attach']['data']) {
            $mailContent->attachData(
                $this->data['attach']['data']->output(),
                $this->data['invoice']['invoice_number'].'.pdf'
            );
        } */

        return $mailContent;
    }
}
