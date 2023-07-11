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

    def validate_rating(self, value):
        if not 0 <= value <= 10:
            raise serializers.ValidationError("Rating should be between 0 and 10.")
        return value
      
    def validate_make_again(self, value):
        if value.lower() not in ["yes", "no"]:
            raise serializers.ValidationError("Invalid value for make_again. Must be either 'Yes' or 'No'.")
        return value