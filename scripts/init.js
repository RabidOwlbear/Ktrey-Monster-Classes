
Hooks.on('init', ()=>{
  //register namespace
  window.KTMC = window.KTMC || {};
  Hooks.call('KTMC Registered')
})
Hooks.once('OseCharacterClassAdded', async () => {
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  await sleep(Math.floor(Math.random() * 2000 + 150));
  const classObj = await game.settings.get('OSE-CharacterBuilder', 'characterClasses');
  console.log(classObj)
  classObj.ktmc = {
    name: 'Ktrey Monster Class Options',
    header: true,
    pack: 'ktrey-monster-classes.class-abilities',
    options: [
      {
        name: 'Ktrey Monster Classes',
        classes: KTMC.data,
        pack: 'ktrey-monster-classes.class-abilities',
        source: 'ktmc'
      }
    ]
  };
  // console.log(classObj);
  await game.settings.set('OSE-CharacterBuilder', 'characterClasses', classObj);
  console.log(
    `
  ____________________________________
  
  
            Ktrey Monster 
          Class Options Added

  
  ____________________________________
`
  );
});