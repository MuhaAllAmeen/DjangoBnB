from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import Conversation,ConversationMessage
from .serializer import ConversationListSerializer

@api_view(['GET'])
def conversations_list(request):
    serializer = ConversationListSerializer(request.user.conversations.all(),many=True)
    return JsonResponse(serializer.data,safe=False)