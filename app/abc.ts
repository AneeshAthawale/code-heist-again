import { supabase } from '@supabase/supabase-js';

const [password, setPassword] = useState('');
const [member2, setMember2] = useState('');
const [member3, setMember3] = useState('');
const [member4, setMember4] = useState('');

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!teamName.trim()) {
    alert('Please enter a team name.');
    return;
  }

  if (!leaderName.trim()) {
    alert('Please enter the team leader's name.');
    return;
  }

  if (!password.trim()) {
    alert('Please enter a password.');
    return;
  }

  const { error } = await supabase.from('teams').insert([
    {
      team_name: teamName,
      leader_name: leaderName,
      password: password,
      member2: member2 || null,
      member3: member3 || null,
      member4: member4 || null,
    },
  ]);

  if (error) {
    if (error.message.includes('duplicate key value')) {
      alert('Team name already exists.');
    } else {
      alert('Error registering team.');
      console.error(error);
    }
    return;
  }

  alert('Team registered successfully!');

  setTeamName('');
  setLeaderName('');
  setPassword('');
  setMember2('');
  setMember3('');
  setMember4('');
}