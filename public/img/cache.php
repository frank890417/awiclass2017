<?php
  function clean($string) {
    $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

    return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
  }
  function grab_image($url,$saveto){
    $ch = curl_init ($url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
    $raw=curl_exec($ch);
    curl_close ($ch);
    if(file_exists($saveto)){
        unlink($saveto);
    }
    $fp = fopen($saveto,'x');
    fwrite($fp, $raw);
    fclose($fp);
  }
  // header( "Content-type: image/png" );
  if (key_exists("url",$_GET)){
    $url = $_GET["url"];
    $img = 'codepen/'.clean($url).'.png';
    echo $img;

    if (!file_exists($img )){
      grab_image($url, $img);
    }


    // $fp = fopen($img, 'rb');

    // send the right headers
    // header("Content-Type: image/png");
    // header("Content-Length: " . filesize( $img ));

    // dump the picture and stop the script
    // fpassthru($fp);
    exit();
  }
?>