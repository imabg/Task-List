// IDEA: Add Task
    document.querySelector('#task-form').addEventListener('submit', function(e){
    let task = document.querySelector('#task').value;
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.append(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'secondary-content delete-item';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('.collection').appendChild(li);
  removebtn = document.querySelector('.fa-remove');
  document.querySelector('#task').value = ''; // IDEA: clear the input field
e.preventDefault();
});



// IDEA: Delete Task
document.querySelector('.collection').addEventListener('click', function(e){
  const removebtn = document.querySelector('.fa-remove');
  const remove = removebtn.parentElement.parentElement.remove();
});

// IDEA: clear ALL Tasks
document.querySelector('.clear-tasks').addEventListener('click',function(e){
    alert('All Data Lost');
    document.querySelector('.collection').innerHTML = '';

  e.preventDefault();
});


// IDEA: filters
document.querySelector('#filter').addEventListener('input',function(e){
  let searchItem = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(num){
    const data = num.firstChild.textContent;
    if(data.toLowerCase().indexOf(searchItem) != -1)
      num.style.display = 'block';
    else
      num.style.display = 'none';
  });

});
