const whosOnline = (friends) => {
    let obj ={ };
    friends.forEach((i) => {
        let a = []
        if(i['lastActivity'] > 10 && i['status'] == 'online'){i['status'] = 'away'};
        if (!obj[i['status']]){obj[i['status']] = [i.username]} else { obj[i['status']].push(i.username)} 
        
        
    })
        
       

  
    return obj
    }

    console.log(whosOnline([{
        username: 'David',
        status: 'online',
        lastActivity: 10
      }, {
        username: 'Lucy', 
        status: 'offline',
        lastActivity: 22
      }, {
        username: 'Bob', 
        status: 'online',
        lastActivity: 104
      },{
        username: 'David2',
        status: 'online',
        lastActivity: 10
      }, {
        username: 'Lucy2', 
        status: 'offline',
        lastActivity: 22
      }, {
        username: 'Bob2', 
        status: 'online',
        lastActivity: 104
      }]))




    //   {
    //     online: ['David'],
    //     offline: ['Lucy'],
    //     away: ['Bob']
    //   }
