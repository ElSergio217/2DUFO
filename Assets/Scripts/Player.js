#pragma strict

var speed:float;
var bullet:GameObject;

function Start () {
	Time.timeScale = 0;
}

function Update () {
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.Translate(Vector3.right * speed * Time.deltaTime);
	}
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.Translate(Vector3.right * -speed * Time.deltaTime);
	}
	if(Input.GetKeyDown(KeyCode.Space)){
		Instantiate(bullet.transform, transform.position, transform.rotation);
	}
	if(Time.timeScale == 0 && Input.GetKey(KeyCode.Space)){
		Time.timeScale = 1;
	}
	if(transform.position.x > 8){
		transform.position.x = 8;
	}
	if(transform.position.x < -8){
		transform.position.x = -8;
	}
}