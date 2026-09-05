export interface module1_testdeta {
  user1: {
    email1: string;
    password1: string;
  };
  user2: {
    email2: string;
    password2: string;
  };
}

export interface TestData {
  module1_testdeta?: module1_testdeta;
}