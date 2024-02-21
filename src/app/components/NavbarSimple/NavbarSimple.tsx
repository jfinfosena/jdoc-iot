import { useState } from 'react';
import { ScrollArea, Text } from '@mantine/core';

import classes from './NavbarSimple.module.css';
import Link from 'next/link';
import { notifications } from '@mantine/notifications';
import { sessions } from '@/app/course/page.data';

export function NavbarSimple({toggle}:{toggle:()=>void}) {

  const data = Object.values(sessions);

  const [active, setActive] = useState('');
  const links = data.map((item) => {   
    let dateCurrent = new Date();   
    dateCurrent.setHours(0,0,0,0);
    item.date.setHours(0,0,0,0);
    if (dateCurrent >= item.date) {     
      return (
        <Link
          className={classes.link}
          data-active={item.label === active || undefined}
          href={`/course/${item.link}`}
          key={item.label}
          onClick={() => {
            setActive(item.label);
            toggle()
          }}
        >
          <span>{item.label}</span>
        </Link>
      );
    } else {
      return (
        <Link
          className={classes.link}          
          href={`/`}        
          onClick={(event) => {
            notifications.show({ 
              title:'Información',
              message: `El contenido estará disponible el: ${item.date.toLocaleDateString()}`,
              autoClose: 2000,
            })
            toggle()
            event.preventDefault()           
          }}          
        >
          <span>
            <div>
              <Text fz="sm" fw={500} c={'yellow'}>
                {item.label}
              </Text>
              <Text fz="xs" c="dimmed">
                {`Disponible ${item.date.toLocaleDateString()}`}
              </Text>
            </div>
          </span>
        </Link>
      );
    }
  });

  return (
    <nav className={classes.navbar}>
      <ScrollArea scrollbars="y">
        <div className={classes.navbarMain}>
          {links}
        </div>
      </ScrollArea>
    </nav>
  );
}
