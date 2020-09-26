<?php

namespace Database\Factories;

use App\Models\Message;
use App\Models\Chat;
use Illuminate\Database\Eloquent\Factories\Factory;

class MessageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Message::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween($min = 1, $max = 30),
            'chat_id' => $this->faker->numberBetween($min = 1, $max = 12),
            'text' => $this->faker->text($maxNbChars = 300)
        ];
    }
}