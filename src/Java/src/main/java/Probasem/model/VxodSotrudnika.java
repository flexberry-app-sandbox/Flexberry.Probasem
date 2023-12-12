package Probasem.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probasem.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВходСотрудника
 */
@Entity(name = "IISProbasemВходСотрудника")
@Table(schema = "public", name = "ВходСотрудника")
public class VxodSotrudnika {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegKartSotrud")
    @Convert("RegKartSotrud")
    @Column(name = "РегКартСотруд", length = 16, unique = true, nullable = false)
    private UUID _regkartsotrudid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegKartSotrud", insertable = false, updatable = false)
    private RegKartSotrud regkartsotrud;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistracVxod")
    @Convert("RegistracVxod")
    @Column(name = "РегистрацВход", length = 16, unique = true, nullable = false)
    private UUID _registracvxodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistracVxod", insertable = false, updatable = false)
    private RegistracVxod registracvxod;


    public VxodSotrudnika() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}