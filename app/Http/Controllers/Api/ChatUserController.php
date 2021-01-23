<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ChatUser;
use App\Models\Chat;

class ChatUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ChatUser  $chatUser
     * @return \Illuminate\Http\Response
     */
    public function show(ChatUser $chatUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ChatUser  $chatUser
     * @return \Illuminate\Http\Response
     */
    public function edit(ChatUser $chatUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ChatUser  $chatUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ChatUser $chatUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ChatUser  $chatUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(ChatUser $chat_user)
    {

        $deleteChatUser = $chat_user->delete();

        if ($deleteChatUser) {
            return response()->json(['status' => 'ok', 'info' => 'Participant is successfully removed from the chat!'], 200);
        } else {
            return response()->json(['status' => 'error', 'info' => 'No such participant'], 200);
        }
    }
}
