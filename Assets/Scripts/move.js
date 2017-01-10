#pragma strict

var speed:float;

function Start () {
	remove();
}

function Update () {
	transform.Translate(Vector3.up * speed * Time.deltaTime);
}

function remove(){
	yield WaitForSeconds(2);
	Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider){
	if(other.tag == "bullet"){
		Destroy(this.gameObject);
		Destroy(other.transform);
	}
}