from app import db

# When you use firstly, you should import your models and use 'db.create_all()' in your python shell.

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, nullable=False)
    student_id = db.Column(db.String(16), unique=True, nullable=False)
    college = db.Column(db.String(30))
    language_type = db.Column(db.Enum('TOEFL', 'IELTS'))
    language_reading = db.Column(db.Integer)
    language_listening = db.Column(db.Integer)
    language_speaking = db.Column(db.Integer)
    language_writing = db.Column(db.Integer)
    gre_verbal = db.Column(db.Integer)
    gre_quantitative = db.Column(db.Integer)
    gre_writing = db.Column(db.Float('1,1'))
    research = db.Column(db.Text)
    project = db.Column(db.Text)
    recommendation = db.Column(db.Text)
    applications = db.relationship('Application', backref='applicant', lazy='dynamic')

    def __repr__(self):
        return '<User {}>'.format(self.username)

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(30))
    university = db.Column(db.String(64))
    major = db.Column(db.String(64))
    term = db.Column(db.String(64))
    result = db.Column(db.Enum('ad', 'offer', 'rej'))
    apply_time = db.Column(db.DateTime)
    result_time = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Application #{}>'.format(self.id)