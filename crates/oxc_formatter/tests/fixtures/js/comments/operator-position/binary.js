const logical_expression =
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa /* trailing comment */ &&
  /* leading comment */ bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb &&
  // line comment
  cccccccccccccccccccccccc;

const bc =
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa /* internal before */ ||
  /* internal after */ bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb;

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa +
  /**/
  a.a().a();
