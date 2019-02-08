<?php

namespace App\Http\Controllers;

use App\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{

    public function get_listing_api(Listing $listing)
    {

//        return $listing->toJson();

        $model = $listing->toArray();

        for ($i=1;$i<=4;$i++){
            $model['image_'.$i] = asset('images/'.$listing->id.'/Image_'.$i.'.jpg');
        }

        return response()->json($model);

    }

}
