from fastapi import FastAPI, WebSocket
import asyncio

app = FastAPI()

@app.websocket("/ws")
async def weather_feed(websocket: WebSocket):
    await websocket.accept()
    while True:
        await websocket.send_json({"temp": 23, "story": "The air hums with static..."})
        await asyncio.sleep(5)  