from momento import CacheClient, Configurations, CredentialProvider
from momento.responses import CacheGet, CacheSet
import os
from datetime import timedelta



class Momento:
    def __init__(self):
        self.cache_client = CacheClient(
            Configurations.Laptop.v1(),
            CredentialProvider.from_environment_variable("MOMENTO_AUTH_TOKEN"),
            timedelta(seconds=60)
        )

    def set_cache(self, cache, key, value):
        print("Setting cache")
        self.cache_client.set(cache, key, value)

    def get_cache(self, cache, key):
        print("Getting cache")
        get_response = self.cache_client.get(cache, key)

        match get_response:
            case CacheGet.Hit() as hit:
                return hit.value_string
            case _:
                print(f"Response was not a hit: {get_response}")
                return ""


momento = Momento()
