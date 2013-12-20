<?php

function listFolderFiles($dir){
  $ffs = scandir($dir);
  echo '<ul>';
  foreach($ffs as $ff){
    if( !skipFolderFile( $ff ) ) {
      echo '<li><a href="'.( str_replace( '../', '', $dir ) ).'/'.$ff.'">'.folderFileName( $ff ).'</a>';
      if(is_dir($dir.'/'.$ff)) listFolderFiles( $dir.'/'.$ff );
      echo '</li>';
    }
  }
  echo '</ul>';
}

function skipFolderFile($file) {
  $skip = array( 
    '.', '..', 'assets', 'index.html', 'patrick-vargas-grok-1.html', 'patrick-vargas-grok-2.html', 
    'practice.html', 'testing', 'html', 'plaid', 'stats', 'cgi-bin', '.membership', '.htaccess', 'error',
    'apple-touch-icon.png'
    );

    foreach ($skip as $test) {
      if ( $test == $file ) { return true; }
    }

  return false;
}

function folderFileName( $file ) {
  $name = '';

  switch( $file ) {
    case 'dm1':
      $name = 'TAM Course: Digital Media I';
      break;
    case 'music':
      $name = 'Music Portfolio';
      break;
    case 'catalog.html':
      $name = 'Courses Taken';
      break;
    case 'about':
      $name = 'About Patrick E. Vargas';
      break;
    default:
      $name = ucfirst( preg_replace( '/\\.[^.\\s]{3,4}$/', '', $file ) );
      break;
  }

  return $name;
}

chdir('assets');
echo '<h1><a href="/">Patrick E. Vargas</a></h1>';
echo listFolderFiles( '../../' );
echo '<p id="click-close">Click to Close<br>or Press m</p>';
?>ftp://vargascorpuscom@ftp.ipage.com/apple-touch-icon.png