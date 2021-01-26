<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Participant;
use App\Models\Chat;

class ParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Chat $chat)
    {
        
        $participants = Participant::where('chat_id', $chat->id)->with('user')->get();

        return response()->json(['participants' => $participants], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Chat $chat)
    {
        
        $newParticipant = Participant::firstOrCreate([
            'chat_id' => $chat->id,
            'user_id' => $request->all()['user_id']
        ]);

        if ($newParticipant) {

            $participants = Participant::where('chat_id', $chat->id)->with('user')->get();

            return response()->json(['status' => 'ok', 'participants' => $participants], 200);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Participant  $participant
     * @return \Illuminate\Http\Response
     */
    public function show(Participant $participant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Participant  $participant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Participant $participant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Participant  $participant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Participant $participant)
    {

        $deleteParticipant = $participant->delete();

        if ($deleteParticipant) {
            return response()->json(['status' => 'ok', 'info' => 'Participant is successfully removed from the chat!'], 200);
        } else {
            return response()->json(['status' => 'error', 'info' => 'No such participant'], 200);
        }
    }
}
