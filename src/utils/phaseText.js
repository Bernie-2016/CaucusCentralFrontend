export function phaseText (phase) {
  let text = '';
  switch (phase) {
  case 'start':
    text = 'Ready to Begin';
    break;
  case 'viability':
    text = 'Viability Phase';
    break;
  case 'not_viable':
    text = 'Not Viable';
    break;
  case 'apportionment':
    text = 'Apportionment Phase';
    break;
  case 'apportioned':
    text = 'Caucus completed';
    break;
  default:
    text = 'Invalid precinct state';
  }
  return text;
}
