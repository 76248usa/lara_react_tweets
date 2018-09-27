@extends('layouts.app')

@section('content')
<div class="container">
    {{$user->username}}
<hr>
    @if(Auth::user()->isNotTheUser($user))
        @if(Auth::user()->isFollowing($user))
            <p><a href="{{ route('users.unfollow', $user) }}">Unfollow</a></p>
        @else
        <p><a href="{{ route('users.follow', $user) }}">Follow</a></p>
        @endif

    @endif   
</div>
@endsection
