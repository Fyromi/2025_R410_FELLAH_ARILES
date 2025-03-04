from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

teachers = [
  {
    "id": 1,
    "name": 'John Doe',
    "subject": 'Archi',
  },
  {
    "id": 2,
    "name": 'Jane Doe',
    "subject": 'Web',
  },
  {
    "id": 3,
    "name": 'Ben Dover',
    "subject": 'Réseaux',
  },
  {
    "id": 4,
    "name": 'Justin Sane',
    "subject": 'Système',
  }
]

@app.route('/teachers', methods=['GET'])
def find_many():
  return jsonify(teachers), 200

@app.route('/teachers/<int:id>', methods=['GET'])
def find_one(id: int):
  for teacher in teachers:
    if teacher['id'] == id:
      return jsonify(teacher), 200

  return jsonify({"message": "Not found"}), 404

@app.route("/teachers", methods=['POST'])
def create():
  next_id = teachers[-1]['id'] + 1
  teachers.append({**request.json, "id": next_id})
  return jsonify({"ressource_location": next_id}), 201

@app.route("/teachers/<int:id>", methods=["PUT"])
def update(id: int):
  global teachers
  data = request.json
  teachers = list(map(lambda t: {**data, "id": id} if t['id'] == id else t, teachers))
  return jsonify({"message": "ok"}), 200

@app.route("/teachers/<int:id>", methods=["DELETE"])
def remove(id: int):
  global teachers
  teachers = list(filter(lambda t: t['id'] != id, teachers))
  return jsonify({}), 204

