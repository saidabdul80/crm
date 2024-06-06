<?php

namespace Crater\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->name,
            'logo' => $this->logo,
            'logo_path' => $this->logo_path,
            'email' => $this->unique_hash,
            'owner_id' => $this->owner_id,
            'commission_percentage'=> $this->commission_percentage,
            'api_url'=> $this->api_url,
            'api_key'=> $this->api_key,
            'webhook_url'=> $this->webhook_url,
            'country'=> $this->country,
            'slug' => $this->slug,
            'address' => $this->when($this->address()->exists(), function () {
                return new AddressResource($this->address);
            }),
            'roles' => RoleResource::collection($this->roles)
        ];
    }
}
