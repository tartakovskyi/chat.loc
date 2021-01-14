<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ChatUser;
use App\Models\Chat;
use App\Models\User;

class ChatUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	$users = User::all();

    	foreach (Chat::all() as $chat) {

    		for ($i=0; $i < 3 ; $i++) { 
    			ChatUser::create([
    				'chat_id' => $chat->id,
    				'user_id' => $users->random()->id
    			]);
    		}
    	}
    }
}
