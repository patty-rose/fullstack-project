from django.db import models

class TestRecipe(models.Model):
    recipe_name = models.CharField(max_length=255)
    make_again = models.CharField(max_length=10)
    recipe = models.TextField()
    rating = models.IntegerField()
    notes = models.TextField()

    def __str__(self):
        return self.recipe_name