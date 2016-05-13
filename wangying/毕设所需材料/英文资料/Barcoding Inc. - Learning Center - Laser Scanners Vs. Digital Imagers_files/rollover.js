// JavaScript Document

function rollOver(img,image){

//      alert(img.src + " | " + img.__old_one)

        if(!image)

                img.src = img.__old_one || img.src;

        else if (image == img.src.substr(img.src.length - image.length)) 

                return;

        else{

                img.__old_one = img.src;

                img.src=image;

        }

}