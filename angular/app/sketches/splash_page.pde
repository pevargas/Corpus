color orb_color(float size)
{
  if ( size > 75 )
  {
    return color( 0, 165, 201, random(50) + 200 );
  }

  return color( 153, 153, 153, random(50) + 200 );
}

class Orb
{
  float m_px, m_py;
  float m_vx, m_vy;
  float m_size;
  float m_angle;
  float m_vel;
  color m_color;

  Orb()
  {
    m_size  = random(2) * 25 + 50;
    m_angle = radians(random(360));
    m_vx    = cos(m_angle);
    m_vy    = sin(m_angle);
    m_px    = random(-m_size, width + m_size);
    m_py    = random(-m_size, height + m_size);
    m_color = orb_color(m_size);
    m_vel   = 1;
  }

  void draw()
  {
    fill( m_color );
    ellipse( m_px, m_py,  m_size, m_size );
  }

  void move()
  {
    m_px += m_vx * pow( 2, m_vel );
    m_py += m_vy * pow( 2, m_vel );
  }

  void update()
  {
    int half = m_size / 2;
    int boundary = m_size * 2;
    move();

    if ( m_px < ( 0 - boundary ) || ( width + boundary ) < m_px )
    {
      m_vx *= -1;
      // m_px -= width + boundary;
    }

    if ( m_py - half < ( 0 - boundary ) || ( height + boundary ) < m_py + half )
    {
      m_vy *= -1;
      // m_py -= height + boundary;
    }

    // Check to see if the mouse hit's it
    if ( pow( mouseX - m_px, 2 ) + pow( mouseY - m_py, 2 ) < pow( half, 2 ) )
    {
      m_vel = 5;
      m_vx *= -1;
      m_vy *= -1;
    }

    // Slow the point after the mouse hits it
    if ( m_vel > 1 )
    {
      m_vel -= 0.1;
    }

  }
};

Orb[] orbs;
int NUM_ORBS = 40;

void setup( )
{
  size ( window.innerWidth, window.innerHeight );
  noStroke( );
  rectMode( CENTER );
  fill( 0, 165, 201 );
  orbs = new Orb[NUM_ORBS];
  for ( int i = 0; i < NUM_ORBS; ++i )
  {
    orbs[i] = new Orb();
  }
}

void draw( )
{
  background( 255 );
  for( Orb o : orbs )
  {
    o.draw();
    o.update();
    o.move();
  }
}
