$(document).ready(() => {
  const table = $('table').DataTable({
    ajax: '/users',
    columns: [
      { title: 'ID', data: '_id', visible: false },
      { title: 'Nome', data: 'nome' },
      { title: 'Sobrenome', data: 'sobrenome' },
      { title: 'Email', data: 'email' },
      { title: 'Nascimento', data: 'nascimento', render: data => moment(data).format('DD/MM/YYYY') },
      { title: 'Telefone', data: 'telefone' },
      { title: 'Tipo', data: 'tipo', render: getTipoLabel }
    ],
    order: [2, 'asc'],
    paging: false,
    info: false,
    language: {
      sEmptyTable: 'Nenhum registro encontrado',
      sInfo: 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
      sInfoEmpty: 'Mostrando 0 até 0 de 0 registros',
      sInfoFiltered: '(Filtrados de _MAX_ registros)',
      sInfoPostFix: '',
      sInfoThousands: '.',
      sLengthMenu: '_MENU_ resultados por página',
      sLoadingRecords: 'Carregando...',
      sProcessing: 'Processando...',
      sZeroRecords: 'Nenhum registro encontrado',
      sSearch: 'Pesquisar',
      oPaginate: {
        sNext: 'Próximo',
        sPrevious: 'Anterior',
        sFirst: 'Primeiro',
        sLast: 'Último'
      },
      oAria: {
        sSortAscending: ': Ordenar colunas de forma ascendente',
        sSortDescending: ': Ordenar colunas de forma descendente'
      }
    }
  });

  table.on('click', 'tbody tr', function () {
    const { _id } = table.row(this).data();
    window.location = `/users/${_id}/edit`;
  });
});

const getTipoLabel = tipo => {
  switch (tipo) {
    case 'aluno':
      return '<span class="badge badge-secondary">Aluno</span>';
    case 'professor':
      return '<span class="badge badge-primary">Professor</span>';
    case 'admin':
      return '<span class="badge badge-success">Admin</span>';
  }
};
