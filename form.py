@csrf_exempt
def add_inbound_enquiry(request):
    if request.method == 'POST':
        # Extract form data
        user_name = request.POST.get('username')
        password = request.POST.get('password')
        
        # Save to the database (Inquiry model)
        inquiry_instance = Inquiry(
            user_name=user_name,
            password=password,
        )
        inquiry_instance.save()

        # Send confirmation email
        mail_subject = 'New Enquiry Received'
        mail_template = 'emails/enquiry.html'

        context = {
            'enquiry': inquiry_instance,
            'to_email': ['enquiry.dotdevz@gmail.com','sales@dotdevz.com','algologsystemspvt@gmail.com'],
        }
        send_notification(mail_subject, mail_template, context)

        # Redirect or render a success page
        return render(request, 'thank_you.html')
    else:
        return JsonResponse({"success": False, "message": "Invalid request method"}, status=405)