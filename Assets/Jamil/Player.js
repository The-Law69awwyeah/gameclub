#pragma strict

var grounded: boolean;
var speed:float; 
var Jump: float;
var end: Transform;
var Dis: UI.Text;
var win: GameObject;
var Compass: GameObject;    

function Start () {

}

function Update () {
    Compass.transform.LookAt(end);

    var dist = Vector3.Distance(end.position, transform.position);
    Dis.text = dist.ToString("F0");
    
    if(dist<2){
        win.SetActive(true);
    }

    var H = Input.GetAxis("Horizontal"); 
    var V = Input.GetAxis("Vertical");

    var Movement = Vector3(H,0,V);

    transform.Translate (Movement * speed * Time.deltaTime);

    if (Input.GetKeyDown(KeyCode.Space)){
    	 if(grounded){
             grounded=false;
             GetComponent.<Rigidbody>().AddForce(Vector3(0,Jump,0));
         }   
    }

    if(transform.position.y < -10){
        Application.LoadLevel(Application.loadedLevel);
    }     
}

function OnCollisionStay ()
{	
    grounded = true;
}