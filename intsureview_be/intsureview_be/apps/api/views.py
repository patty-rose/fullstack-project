from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer, TestRecipeSerializer
from intsureview_be.apps.api.models import TestRecipe


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class TestRecipeViewSet(viewsets.ModelViewSet):
    queryset = TestRecipe.objects.all()
    serializer_class = TestRecipeSerializer
    
    @action(detail=False, methods=["post"])
    def submit_form(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Form submitted successfully!"}, status=201)
        return Response(serializer.errors, status=400)