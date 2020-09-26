<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	User::factory(35)->create();

    	User::create(
    		[
    			'name' => 'Volodymyr',
    			'email' => 'km170682tvv@gmail.com',
    			'email_verified_at' => now(),
    			'password' => bcrypt('123456'),
    			'userpic' => 'volodymyr.jpg'
    		]
    	);
    }
}
