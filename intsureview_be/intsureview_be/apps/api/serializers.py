from django.contrib.auth.models import User, Group
from rest_framework import serializers
from intsureview_be.apps.api.models import TestRecipe

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]

class TestRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestRecipe
        fields = ["recipe_name", "make_again", "recipe", "rating", "notes"]