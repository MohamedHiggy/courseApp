@component('mail::message')
Hi, {{ $details['name']  }}

Please verify your E-mail address by clicking the link below.

@component('mail::button', ["url" => "http://course.test/auth/verify/" . $details['email_verification_code'] . '-' . $details['id']])
Verify E-mail
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
