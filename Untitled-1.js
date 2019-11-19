{
  user: {
    createdAt: Date;
    updatedAt: Date;
    username: String;
    firstname: String;
    password: String;
    email: String;
    picture: String;
    lastname: String;
    roles: Array(Ref(Role));
    services: Array(Ref(Service));
    feedbacks: Array(Ref(Feedback));
    comments: Array(Ref(Comment));
  }

  role: {
    createdAt: Date;
    updatedAt: Date;
    name: String;
    permission: String;
    users: Array(Ref(User));
  }

  service: {
    createdAt: Date;
    updatedAt: Date;
    name: String;
    description: String;
    user: Ref(User);
    feedbacks: Array(Ref(Feedback));
  }

  feedback: {
    createdAt: Date;
    updatedAt: Date;
    text: String;
    rate: Number;
    user: Ref(User);
    service: Ref(Service);
    comments: Array(Ref(Comment));
  }

  comment: {
    createdAt: Date;
    updatedAt: Date;
    text: String;
    user: Ref(User);
    feedback: Ref(Feedback);
  }
}
