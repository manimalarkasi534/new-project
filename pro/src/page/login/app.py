# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import mysql.connector

# app = Flask(__name__)
# CORS(app)  # To allow React to access the backend

# # Database connection
# db = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="Mani@534",
#     database="login"
# )
# cursor = db.cursor()

# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     reg_no = data.get('studentID')
#     dob = data.get('DateOfBirth')

#     query = "SELECT * FROM login WHERE studentID = %s AND DateOfBirth = %s"
#     cursor.execute(query, (reg_no, dob))
#     result = cursor.fetchone()

#     if result:
#         return jsonify({"status": "success", "message": "Login successful"})
#     else:
#         return jsonify({"status": "fail", "message": "Invalid credentials"}), 401

# if __name__ == '__main__':
#     app.run(debug=True)



from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Connect to your MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",         # 🔁 change to your MySQL username
    password="Mani@534", # 🔁 change to your MySQL password
    database="login"  # 🔁 change to your database name
)
cursor = db.cursor()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    student_id = data.get('studentID')
    dob = data.get('DateOfBirth')

    # Debug: print(data)
    query = "SELECT * FROM login WHERE studentID = %s AND DateOfBirth = %s"
    cursor.execute(query, (student_id, dob))
    result = cursor.fetchone()

    if result:
        return jsonify({"status": "success", "message": "Login successful"})
    else:
        return jsonify({"status": "fail", "message": "Invalid student ID or DOB"}), 401

if __name__ == '__main__':
    app.run(debug=True)
