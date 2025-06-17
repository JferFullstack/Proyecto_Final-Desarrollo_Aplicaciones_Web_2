// app/components/BootstrapClient.tsx
'use client'; 

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; 

export default function BootstrapClient() {
  const pathname = usePathname();

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, [pathname]); 

  return null; 
}