import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  return (
    <Card>
      <CardContent>
        <h1>Linear Safety Sentinel</h1>
        <p>Paste any message; Sentinel scans instantly.</p>
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Paste scenario here…'
        />
        <Button onClick={() => alert('Scanning…')}>Scan</Button>
      </CardContent>
    </Card>
  );
}
