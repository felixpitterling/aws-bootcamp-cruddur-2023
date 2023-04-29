import pytest
from myapp import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health_check(client):
    response = client.get('/api/health-check')
    assert response.status_code == 200
    assert response.data == b'OK'