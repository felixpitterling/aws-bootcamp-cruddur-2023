def test_healthcheck(client):
    response = client.get("/api/health-check")
    assert response.status_code == 200