package in.hefshine.NaukriProject.module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class StudentDash {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	public String name;
	public String email;
	public String education;
	public String marks10;
	public Long tenYear;
	public String marks12;
	public Long twelYear;
	public String gradmarks;
	public String postgradu;
	public String blocklock;
	public String graduYear;
	public String dob;
	public String skills;
	public String experience;
	
	
//	public Long id;
//	public String name;
//	public String email;
//	public String education;
//	public Long marks10;
//	public Long marks12;
//	public Long gradmarks;
//	public Long graduYear;
//	public String dob;
//	public String skills;
//	public String experience;
	
	
	
	
}
