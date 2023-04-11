from flask import Flask, request, jsonify;


app = Flask(__name__)

@app.route('/hello')
def index():
    name = request.args.get('name')
    if name is  None:
        return "Hello World"
    return "Hello, {}!".format(name)

@app.route('/hello-json')
def json_dictionary():
    return {"text": "Hello World from Dictionary"}

@app.route('/hello-html')
def html_code():
    return "<h1>Hello World</h1><p>Subtext</p>"

@app.route('/hello-html-error')
def html_error():
    return "<h1>Error</h1><p>Status code: 404</p>", 404


@app.route('/hello/<name>')
def whatevername(name):
    return 'Hello ' + str(name)

@app.route('/hello/<name>/change/<cost>')
def change(name, cost):
    c = 10 - int(cost)
    if c < 0:
        return 'Hello ' + str(name) + ' you cannot aford this' 

    return 'Hello ' + str(name) + ', your change is ' + str(c)


@app.route('/reflect', methods=['GET', 'POST'])
def query_function():
    name = request.args.get('name')
    if name is None:
        return "Hello world"
    return "Hello, {}!".format(name)


@app.route('/reflect/plex', methods=['GET', 'POST'])
def reflect_plex():
    data = request.get_json()
    pdata = {}
    for key in data:
        pkey = "plex_" + key
        if isinstance(data[key], str):
            data[key] = "plex_" + data[key]
        pdata[pkey] = data[key]
    return jsonify(pdata)


@app.route('/reflect/plex/form', methods=['GET', 'POST'])
def finale():
    #assuming all is string
    data = request.get_json()
    send_data = {}
    for key, value in data.items(): #tuple with keys and values
        send_key = "plex_" + key
        send_value = "plex_" + value
        send_data[send_key] = send_value
    return jsonify(send_data)



app.run(host='0.0.0.0', port=81)
