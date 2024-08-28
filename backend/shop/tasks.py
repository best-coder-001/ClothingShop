from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_email_contact(name, email):
    return send_mail(
        subject="Thank you for contacting us!",
        message=f"""
            Hello {name}, we've got your message,
            we'll send you an answer within a week. Please stay with us!
            """,
        from_email="r06679615@gmail.com",
        recipient_list=[email, ],
        fail_silently=False
    )
